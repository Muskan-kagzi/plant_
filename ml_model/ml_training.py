import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.linear_model import LogisticRegression
from sklearn.pipeline import Pipeline
import joblib

# Load dataset
df = pd.read_csv("plants_dataset.csv")

# Clean data
df = df.dropna(subset=["use_keyword", "Common Name"])

X = df["use_keyword"]
y = df["Common Name"]

# Build model
model = Pipeline([
    ("tfidf", TfidfVectorizer(stop_words="english")),
    ("clf", LogisticRegression(max_iter=2000))
])

# Train
model.fit(X, y)

# Save model
joblib.dump(model, "plant_model.pkl")

print("✅ Model trained & saved as plant_model.pkl")
