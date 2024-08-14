import os
import json

def format_country_name(file_name):
    # Remove the file extension and replace hyphens with spaces
    country_name = file_name.replace(".png", "").replace("-", " ")
    # Capitalize each word in the country name
    return country_name.title()

def create_countries_json():
    countries = []
    for file_name in os.listdir("."):
        if file_name.endswith(".png"):
            country = {
                "value": file_name.replace(".png", ""),
                "name": format_country_name(file_name),
                "imageURL": f"/public/countries/{file_name}"
            }
            countries.append(country)
    
    with open("countries.json", "w") as json_file:
        json.dump(countries, json_file, indent=4)

if __name__ == "__main__":
    create_countries_json()
