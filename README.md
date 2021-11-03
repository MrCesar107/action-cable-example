# Simple ActionCable example

**Ejercicio básico para mostrar el flujo de ActionCable en una aplicación de Rails**

## Requerimientos

- Ruby 2.6.8
- Rails 6.0.4.1
- PostgreSQL +10
- Redis (**Es muy importante que tengas Redis instalado y corriendo en tu computadora**)
- Node 14.17.0 LTS
- Yarn +1.22.10

## La aplicación

Esta applicación simula ser un gestor de artículos para un blog, en donde puedes crear, actualizar y/o eliminar
artículos de la base de datos. Cada vez que crea un nuevo artículo, el **backend** enviará un mensaje a través de
**ActionCable** que se podrá visualizar en la consola de tu navegador.

## Correr la aplicación en local
A continuación enumeramos los pasos que debes seguir para poder correr este proyecto en tu computadora:
**IMPORTANTE: Debes cumplir con los requerimientos minimos listados arriba antes de continuar**
- Descargar el repositorio en tu computadora
- Dirigirte a la carpeta del repositorio y correr el comando `$ bundle install`
- Una vez terminada la instalación del proyecto correr el comando `$ yarn install`
- Despues de terminar de instalar las dependencias de nuestro proyecto correr el comando `$ rails db:create && rails db:migrate`
- Una vez terminado de configurar nustro proyecto corremos el comando `$ rails s` para iniciar nuestro servidor

# Flujo de la aplicación

Los archivos más importantes (y los que hacen la magia) son los siguientes:
- config/cable.yml
- app/javascript/channels/index.js
- app/javascript/channels/consumer.js
- app/javascript/channels/article_channel.js
- app/channels/article_channel.rb
- app/channels/application_cable/channel.rb
- app/channels/application_cable/connection.rb

Podemos dividir estos archivos de dos partes. Los archivos **js** se encargan tando de las conexiones como de recibir y
manipular los datos desde el frontend, mientras que los archivos **rb** tienen la responsabilidad de crear y manejar
las conexiones y enviar los datos desde el backend.

**NOTA: Se sugiere revisar la [documentación de ActionCable](https://guides.rubyonrails.org/action_cable_overview.html)
mientras revisas cada archivo listado para entender mejor**
