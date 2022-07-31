
from flask import Flask, render_template, request
from chatterbot import ChatBot
from chatterbot.trainers import ListTrainer
import os
import time
time.clock = time.time
import sqlite3
app = Flask(__name__)

'''conversation=open("D:\pytho willow\sitemacadastrosefin\chatbotweb/file.txt","r")
d=conversation.read()
print(d)'''
'''with open('D:\pytho willow\sitemacadastrosefin\chatbotweb/file.txt','r') as file:
    conversation = file.read()
'''

bot = ChatBot("Escolha Opçao")
trainer = ListTrainer(bot)
trainer.train([
"1","Suporte",
"2","Financeiro (69)99270-2408",
"3","Numero (69)99270-2408",])

@app.route("/")
def home():

	return render_template("home.html")
	
@app.route("/get")
def get_bot_response():
	

	
	while True:
		userText = request.args.get('msg')
		
		
	
		return str(bot.get_response(f'{userText}'))
		
def limpabanco():
	conn = sqlite3.connect('db.sqlite3')
	cursor = conn.cursor()

	cursor.execute(""" DELETE FROM statement """)

	conn.commit()

	print('Registro excluido com sucesso.')

	conn.close()
if __name__ == "__main__":
	app.run(debug=True)