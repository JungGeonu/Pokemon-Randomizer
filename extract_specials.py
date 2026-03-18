import urllib.request
import json

url = "https://beta.pokeapi.co/graphql/v1beta"
data = {
    "query": """
    query {
      legendary: pokemon_v2_pokemonspecies(where: {is_legendary: {_eq: true}}) { id }
      mythical: pokemon_v2_pokemonspecies(where: {is_mythical: {_eq: true}}) { id }
    }
    """
}

req = urllib.request.Request(
    url, 
    data=json.dumps(data).encode("utf-8"), 
    headers={
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
)
with urllib.request.urlopen(req) as response:
    result = json.loads(response.read().decode())
    
    legendaries = [item['id'] for item in result['data']['legendary']]
    mythicals = [item['id'] for item in result['data']['mythical']]
    
    print("const LEGENDARY_IDS = " + str(legendaries) + ";")
    print("const MYTHICAL_IDS = " + str(mythicals) + ";")
