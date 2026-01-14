from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd

app = Flask(__name__)
CORS(app)

# ===============================
# LOAD DATASET
# ===============================
df = pd.read_csv("plants_dataset.csv")

# Normalize for safe comparison
df["use_keyword"] = df["use_keyword"].astype(str).str.lower().str.strip()
df["Common Name"] = df["Common Name"].astype(str).str.strip()

# ===============================
# PREDICT ROUTE
# ===============================
@app.post("/predict")
def predict():
    data = request.json
    text = data.get("text", "").strip().lower()

    if not text:
        return jsonify({"found": False})

    # 🔍 STRICT SEARCH IN use_keyword COLUMN
    match = df[df["use_keyword"] == text]

    if not match.empty:
        common_name = match.iloc[0]["Common Name"]
        return jsonify({
            "found": True,
            "common_name": common_name
        })

    # ❌ NOT FOUND → USE WIKIPEDIA
    return jsonify({
        "found": False
    })

# ===============================
# START SERVER
# ===============================
if __name__ == "__main__":
    app.run(port=8000, debug=True)
