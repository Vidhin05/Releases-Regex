import json
import re
from pathlib import Path

def extract_release_group_specifications(json_files, strip_format=False):
    regex_map = {}
    for json_file in json_files:
        with open(json_file, 'r') as file:
            data = json.load(file)
            name = data.get('name')
            regex_list = []

            # Loop through specifications to find ReleaseGroupSpecification
            for spec in data.get('specifications', []):
                if spec.get('implementation') == "ReleaseGroupSpecification" or spec.get('implementation') == "ReleaseTitleSpecification":
                    value = spec.get('fields', {}).get('value')
                    if value:
                        if strip_format:
                            # OLD CODE (commented): Strip the regex from the value if it's wrapped in ^ and $
                            # Strip the regex from the value if it's wrapped in ^ and $
                            cleaned_value = re.sub(r'^\^|\$$', '', value)
                            # also remove leading and trailing round brackets
                            cleaned_value = re.sub(r'^\(|\)$', '', cleaned_value)
                            regex_list.append(cleaned_value)
                        else:
                            # NEW CODE: Keep the original format for JSON output
                            regex_list.append(value)

            # Combine all the extracted values into one regular expression for the given name
            if regex_list:
                if strip_format:
                    # OLD CODE (commented): Ensure word boundaries \b apply to the whole group of values, not individually
                    # Ensure word boundaries \b apply to the whole group of values, not individually
                    combined_regex = rf"\b({'|'.join(regex_list)})\b"
                else:
                    # NEW CODE: Smart combine patterns for JSON format
                    combined_regex = smart_combine_patterns(regex_list)
                
                regex_map[name] = combined_regex

    return regex_map

def smart_combine_patterns(patterns):
    """
    Intelligently combine regex patterns by grouping similar types:
    - ReleaseGroupSpecification patterns (^...$) get combined with \b wrapping
    - ReleaseTitleSpecification patterns get joined directly
    """
    release_group_patterns = []  # Patterns with ^...$
    release_title_patterns = []  # Other patterns
    
    for pattern in patterns:
        # Strip outer ^ and $ and parentheses for grouping
        stripped = re.sub(r'^\^|\$$', '', pattern)
        stripped = re.sub(r'^\(|\)$', '', stripped)
        
        # Check if original had ^ and $ (ReleaseGroupSpecification)
        if pattern.startswith('^') and pattern.endswith('$'):
            release_group_patterns.append(stripped)
        else:
            release_title_patterns.append(pattern)
    
    # Combine the patterns
    result_parts = []
    
    # Add release group patterns with single \b wrapper
    if release_group_patterns:
        combined_groups = '|'.join(release_group_patterns)
        result_parts.append(f"\\b({combined_groups})\\b")
    
    # Add release title patterns directly
    if release_title_patterns:
        result_parts.extend(release_title_patterns)
    
    return '|'.join(result_parts)

# Example usage: load JSON files from this script's directory
script_dir = Path(__file__).resolve().parent
json_files = sorted(str(path) for path in script_dir.glob("*.json"))

# Generate regex in JSON format (strip_format=False)
regex_map = extract_release_group_specifications(json_files, strip_format=False)

# Print the regex for each name in JSON format
print("JSON Format Output:")
print("=" * 80)
for name, regex in regex_map.items():
    # Escape backslashes for JSON format (\ becomes \\)
    escaped_regex = regex.replace('\\', '\\\\')
    # Wrap in regex delimiters and add case-insensitive flag
    json_pattern = f"/{escaped_regex}/i"
    print(f'"{name}": "{json_pattern}",')
    print()

# OLD CODE (commented): Generate regex in frontend format (strip_format=True)
# print("\nFrontend Format Output:")
# print("=" * 80)
# regex_map_frontend = extract_release_group_specifications(json_files, strip_format=True)
# for name, regex in regex_map_frontend.items():
#     print(f"{name}:\n{regex}\n")
