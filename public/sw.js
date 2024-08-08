// let notificationInProgress = false;
//
// self.addEventListener('push', (event) => {
//     if (notificationInProgress) return;
//
//     notificationInProgress = true;
//     const notificationData = event.data.json();
//     console.log("notification received service worker -->", notificationData)
//
//     self.clients.matchAll({type: 'window', includeUncontrolled: true})
//         .then(function (clientList) {
//             const visibleClients = clientList.filter((client) => client.visibilityState === 'visible' && client.focused);
//
//             if (visibleClients.length === 0) {
//                 // No visible client found, show notification
//                 const notificationPayload = {
//                     body: notificationData.body.description,
//                     icon: "/icon-256x256.png",
//                     vibrate: [200, 100, 200]
//                 };
//
//                 self.registration.showNotification(notificationData.body.title, notificationPayload);
//             } else {
//                 // At least one visible client found, don't show notification
//                 console.log('Client is visible, no notification shown');
//             }
//         })
//         .catch(error => {
//             console.error('Error in push event:', error);
//         })
//         .finally(() => {
//             notificationInProgress = false;
//         });
// });
//
//
// self.addEventListener('notificationclick', (event) => {
//     event?.notification.close();
//     event?.waitUntil(
//         self.clients.matchAll({type: 'window', includeUncontrolled: true}).then(function (clientList) {
//             if (clientList.length > 0) {
//                 let client = clientList[0]
//                 for (let i = 0; i < clientList.length; i++) {
//                     if (clientList[i].focused) {
//                         client = clientList[i]
//                     }
//                 }
//                 return client.focus()
//             }
//             return self.clients.openWindow('/notifications')
//         })
//     )
// })
