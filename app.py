from flask import Flask, render_template, request, redirect, url_for
from flaskext.mysql import MySQL

app = Flask(__name__)

mysql = MySQL()
app.config['MYSQL_DATABASE_HOST']='localhost'
app.config['MYSQL_DATABASE_USER']='root'
app.config['MYSQL_DATABASE_PASSWORD']=''
app.config['MYSQL_DATABASE_BD']='proyect_ecommerce'
mysql.init_app(app)


@app.route("/")
def index():
    return render_template("ecommerce/index.html")

@app.route("/contacto")
def contacto():
    return render_template("ecommerce/contacto.html")

@app.route("/iniciosesion")
def loggin():
    return render_template("ecommerce/iniciosesion.html")

@app.route("/nosotros")
def nosotros():
    return render_template("ecommerce/nosotros.html")

@app.route("/registro")
def registro():
    return render_template("ecommerce/registro.html")

@app.route('/store', methods=['POST'])
def storage():
 sql = "INSERT INTO `proyect_ecommerce`.`usuario` (`id`, `nombre`, `apellido`, `email`, `nombre usuario`, `contraseña` ) VALUES (NULL, %s,%s,%s,%s,%s);"
 nombre = request.form["nombre"]
 apellido = request.form["apellido"]
 email = request.form["mail"]
 usuario = request.form["usuario"]
 contraseña = request.form["contraseña"]
 datos = (nombre, apellido, email, usuario, contraseña)
 conn = mysql.connect()
 cursor = conn.cursor()
 cursor.execute(sql,datos)
 conn.commit()
 data = "Se ha registrado correctamente, puede iniciar sesión"
 return render_template("ecommerce/registro.html", data=data)


@app.route('/log_usuario', methods=['POST'])
def log_usuario():
    alerta = "Ingresa el usuario y contraseña"
    name_usuario = request.form["usuario"]
    contraseña = request.form["contraseña"]

    if name_usuario == "" or contraseña == "":
        return render_template("ecommerce/iniciosesion.html", alerta = alerta)
    
    else:
        query = "SELECT `nombre usuario`, `contraseña` FROM `proyect_ecommerce`. `usuario` WHERE `nombre usuario` = %s AND `contraseña` = %s"
        data = (name_usuario , contraseña)
        conn = mysql.connect()
        cursor = conn.cursor()
        cursor.execute(query, data)
        conn.commit()
        datos=cursor.fetchall()
        
        if len(datos) == 0:

            alerta= "Usuario o Contraseña invalido"
            return render_template("ecommerce/iniciosesion.html", alerta = alerta)
        
        else:
            user_db = datos[0][0]
            password_user_db = datos[0][1]
            if name_usuario == user_db and contraseña==password_user_db:
                print(datos)
                return render_template("ecommerce/index_log.html", datos = datos)
        

if __name__ == "__main__":
    app.run(debug=True)


