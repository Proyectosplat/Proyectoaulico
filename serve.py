import http.server
import socketserver

PORT = 8000

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(("", PORT), Handler) as httpd:
    print(f"Sirviendo en http://0.0.0.0:{PORT}/")
    print("Abre esta dirección desde tu teléfono usando la IP de tu PC en la red local.")
    httpd.serve_forever()
