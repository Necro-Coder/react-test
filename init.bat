@echo off
:: Este script iniciará el proyecto para desplegar la aplicación

echo [Paso 1] Ejecutando 'npm install' en el directorio actual...
call npm install
if ERRORLEVEL 1 (
    echo Error: 'npm install' falló.
    pause
    exit /b 1
)

echo [Paso 2] Cambiando al directorio 'client'...
cd client
if ERRORLEVEL 1 (
    echo Error: No se pudo cambiar al directorio 'client'.
    pause
    exit /b 1
)

echo [Paso 3] Ejecutando 'npm install' en 'client'...
call npm install
if ERRORLEVEL 1 (
    echo Error: 'npm install' en 'client' falló.
    pause
    exit /b 1
)

echo [Paso 4] Configuración del proyecto completa. Iniciando el servidor...
cd ..
if ERRORLEVEL 1 (
    echo Error: No se pudo regresar al directorio raíz.
    pause
    exit /b 1
)

echo [Paso 5] Ejecutando 'npm start' para iniciar el servidor...
npm start
if ERRORLEVEL 1 (
    echo Error: 'npm start' falló.
    pause
    exit /b 1
)

echo Todo se ejecutó correctamente.
pause
