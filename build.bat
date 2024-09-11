@Echo Off
call npm run build
start docker build -t guilhermeavp/user:V1 .
exit