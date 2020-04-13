import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];
  title = 'lab01';

  onServerAdded(serverData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(brueprintData: { serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: brueprintData.serverName,
      content: brueprintData.serverContent
    });
  }
}
