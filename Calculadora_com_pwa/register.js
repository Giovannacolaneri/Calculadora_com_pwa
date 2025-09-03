if("serviceWorker" in navigator){ //verifica se o navegador suporta service workers
    navigator.serviceWorker.register("service-worker.js") //registra o service worker
    .then(()=> console.log("Service worker foi registrado com sucesso.")) //se o registro for bem-sucedido, exibe mensagem
    .catch(err => console.log("Erro ao registrar o service worker: ", err)); //se ocorrer um erro, exibe mensagem de erro 
 
}