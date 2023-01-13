from requests import get
import json

url = "http://129.152.26.72:8123/api/history/period/2023-1-14T00:40:00+02:00?filter_entity_id=sensor.pc_energy&minimal_response"
# url = "http://129.152.26.72:8123/api/"

headers = {
    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiI4Y2I1OTk5YTRiZDI0Mjg0OGZmMjFkZmM0NmU1MTY1NSIsImlhdCI6MTY2OTU0ODU3OSwiZXhwIjoxOTg0OTA4NTc5fQ.0Xjp3tXMRBxQzMcpBJfycOt_BKAgmD2darfnJKUg5J4",
    "content-type": "application/json",
}

response = get(url, headers=headers)
json_response = json.loads(response.text)
print(json.dumps(json_response, indent=2))
# print(response.text)