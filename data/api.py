from flask import Flask, jsonify, request
import csv
import __future__
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/get_tasks", methods=["GET"])
def get_tasks():
    with open("tasks.csv", "r", encoding = "utf8") as f:
        reader = csv.DictReader(f)
        return str([dict(row) for row in reader])

@app.route("/api/addtask", methods=["POST"])
def add_task():
	date = request.args.get("date")
	room = request.args.get("room")
	katerring = request.args.get("katerring")
	city = request.args.get("city")
	pickup_time = request.args.get("pickup_time")
	user_id = request.args.get("user_id")
	geolocation = request.args.get("geolocation")
	task_id = request.args.get("task_id")
	with open("tasks.csv", "a") as f:
		f.write(f"{date},{room},{katerring},{city},{pickup_time},{user_id},{geolocation},{task_id}\n")
	return "200"
	
if __name__ == "__main__":
    app.run(debug=True)
    
