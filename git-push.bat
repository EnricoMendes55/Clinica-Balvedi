@echo off
setlocal

if "%~1"=="" (
    echo Uso: git-push.bat "mensagem do commit"
    exit /b 1
)

echo.
echo === Clínica Balvedi — Git Push ===
echo.

git add .
if errorlevel 1 ( echo ERRO: git add falhou & exit /b 1 )

git commit -m "%~1"
if errorlevel 1 ( echo ERRO: git commit falhou & exit /b 1 )

git push origin main
if errorlevel 1 ( echo ERRO: git push falhou & exit /b 1 )

echo.
echo Push concluído com sucesso!
endlocal
