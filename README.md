# BROKER FAKE PUBLISHER
- ide nnya adalah menerima inputan dari si user
- input terdiri dari 2 type, yang pertama inputan untuk mengjkonfigurasi data untuk koneksi ke broker service
- input ke dua untuk input kondifugrasi message yang akan di broadcast
- input konfiogurasi broker setelah seelesai akan di simpan di satu file di dalam folder /config/broker.json, jika bbaru pertama kali di jalannkan app akan nmeminta inputan unutk konfig ke message broker, namun jika suddah pernah melkkukan konfig, maka app akan memberikan opsi membikin baru konfig atau pakai konfig yag sudah aada


# RUN THIS APP ON DOCKER CONTAINER AS A SINGLE NODE JS SCRIPT
- make sure you're has node js installed on the server
- pull this codebase
- copy `.env.example` to `.env`
- configure your broker envoirontment as example
- build this app with npm run build 
- generate config file for publishing within format : `docker run -it --rm --name <name-of-container> -v "$PWD":/usr/src/app -w /usr/src/app node:latest node build/index.js generate-config <path-of-config-file-generation> <topi> <locomotive/anoteher-message-context>`
- example to generate config file wich will be placing configured file inside : `root-to-our-project/build/dev/docker/<topic>/<context>.json` 
- try it : `docker run -it --rm --name generate-config-script -v "$PWD":/usr/src/app -w /usr/src/app node:latest node build/index.js generate-config dev/docker test CC201`, 
- the generated file will be has a name same as `<context>` arguments and placed inside `<topic>` folder wich is placed in `root-to-our-project/build/dev/docker/` as we defined when generating conffig process
- after that run publish command, to runnnig publishing fake data: just tell docker to run our generated configuration, example `docker run -it --rm --name publish-script -v "$PWD":/usr/src/app -w /usr/src/app node:latest node build/index.js publish /dev/docker/test/CC201/CC201.json test 1000`