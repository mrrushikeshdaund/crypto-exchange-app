from database.db_connection import get_db_connection, close_db_connection

def user_login(email, password):
    conn = get_db_connection();
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users WHERE email = ? AND password = ?", (email, password))
    user = cursor.fetchone()
    close_db_connection(conn)
    if user:
        return {"status": "success", "message": "Login successful","data": dict(user)}
    else:
        return {"status": "error", "message": "Invalid username or password","data": {}}
    

def create_user(username, password, email):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", (username, password, email))
    conn.commit()
    close_db_connection(conn)
    return {"status": "success", "message": f"User {username} created successfully"}

def get_all_user():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM users")
    result = cursor.fetchall()  
    conn.close()                
    users = [dict(row) for row in result]

    return {
        "status": "success",
        "message": "Get All Users",
        "data": users
    }