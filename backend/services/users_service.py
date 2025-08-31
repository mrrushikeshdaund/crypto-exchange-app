from database.db_connection import get_db_connection, close_db_connection

def user_login(username, password):
    # Simulate user login logic
    if username == "admin" and password == "password":
        return {"status": "success", "message": "Login successful"}
    else:
        return {"status": "failure", "message": "Invalid credentials"}
    

def create_user(username, password, email):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO users (username, password, email) VALUES (?, ?, ?)", (username, password, email))
    conn.commit()
    close_db_connection(conn)
    # Simulate user creation logic
    return {"status": "success", "message": f"User {username} created successfully"}