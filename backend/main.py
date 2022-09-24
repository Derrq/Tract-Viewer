import json
from unittest import result
from flask import Flask
from flask_cors import CORS, cross_origin

import sqlite3


app = Flask(__name__)
cors =CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

conn = sqlite3.connect("tracts.gpkg", check_same_thread=False)
cursor = conn.cursor()


@app.route("/tracts")
@cross_origin()
def list_tracts():
    query= f"SELECT * FROM tracts ;"
    cursor.execute(query)
    tractList=cursor.fetchall()
    dumpedString= json.dumps(tractList,default=str)

    return {
        "tracts": [json.loads(dumpedString)],
    }


@app.route("/tracts/<int:pk>")
@cross_origin()
def get_tract(pk):
    query= f"SELECT * FROM tracts WHERE fid={pk} ;"
    cursor.execute(query)
    tractList=cursor.fetchall()
    dumpedString= json.dumps(tractList,default=str)

    return {
        "object": [json.loads(dumpedString)],
    }

