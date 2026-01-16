b = 'Dooky|GNOMiSSiON|HHWEB|NINJACENTRAL|NPMS|ROCCaT|SiGMA|SLiGNOME|SwAgLaNdEr|Dooky|DRACULA|HHWEB|NINJACENTRAL|SLiGNOME|SwAgLaNdEr|T4H|ViSiON'
a = b.split('|')
# remove duplicates, maintain order
a = list(dict.fromkeys(a))
# sort alphabetically (case-insensitive)
a = sorted(a, key=str.casefold)
# print items with | separator
print('|'.join(a))