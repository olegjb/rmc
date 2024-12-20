from flask import Flask,  render_template, request, redirect



app = Flask(__name__)

@app.route('/')
def aloha():
    return render_template('index.html')


@app.route('/nav-bar')
def nav_bar():
    return render_template('nav-menu.html')

if __name__ == '__main__':
    app.run(host='localhost', port=8066, debug=True)

    # for deployment
    # app.run(host='0.0.0.0')