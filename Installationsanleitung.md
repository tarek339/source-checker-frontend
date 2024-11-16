# Installationsanleitung Quellenchecker

## Schritt 1: Projekt herunterladen

1. Klonen oder laden Sie das Projekt von der Repository-URL herunter.

## Schritt 2: Terminal öffnen

1. Öffnen Sie das Terminal.
2. Navigieren Sie zum Projektverzeichnis mit folgendem Befehl:
   cd /Pfad/zum/Projekt

## Entwicklungsmodus

1. Installieren Sie die erforderlichen Abhängigkeiten:
   ```
   npm install
   ```
2. Starten Sie den Entwicklungsserver:
   ```
   npm run dev
   ```
3. Öffnen Sie die folgende URL in Ihrem Webbrowser:
   ```
   http://localhost:5173
   ```
4. Erstellen Sie eine .env-Datei im Root-Verzeichnis des Projekts.
5. Fügen Sie die folgenden Variablen und deren Werte hinzu:
   ```
   VITE_AXIOS_BASE_URL=http://localhost:4000
   VITE_CLIENT_URL=http://localhost:5173
   ```

## Produktionsmodus

Um das Projekt für die Produktion zu erstellen und zu starten, folgen Sie diesen Schritten:

1. Erstellen Sie die Produktionsversion:
   ```
   npm run build
   ```
2. Navigieren Sie in das dist-Verzeichnis:
   ```
   cd dist
   ```
3. Starten Sie das Produktions-Server:
   ```
   npm start
   ```

## Hinweis

Stellen Sie sicher, dass Sie Node.js und npm installiert haben, um die oben genannten Befehle ausführen zu können. Weitere Informationen finden Sie in der offiziellen [Node.js-Dokumentation] (https://nodejs.org/en/).
