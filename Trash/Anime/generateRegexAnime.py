import json
import re
from glob import glob

def extract_release_group_specifications(json_files):
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
                        # Strip the regex from the value if it's wrapped in ^ and $
                        cleaned_value = re.sub(r'^\^|\$$', '', value)
                        # also remove leading and trailing round brackets
                        cleaned_value = re.sub(r'^\(|\)$', '', cleaned_value)
                        regex_list.append(cleaned_value)

            # Combine all the extracted values into one regular expression for the given name
            if regex_list:
                combined_regex = rf"({'|'.join(regex_list)})"
                regex_map[name] = combined_regex

    return regex_map

# Example usage: assuming JSON files are in the current directory
json_files = glob('*.json')  # Adjust the pattern to match your JSON file location
json_files.sort()  # Sort the files to process them in a consistent order
regex_map = extract_release_group_specifications(json_files)

# Print the regex for each name
for name, regex in regex_map.items():
    print(f"{name}:\n{regex}\n")
