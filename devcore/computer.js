<html>
    <body id="root"></body>
    <script type="text/javascript" src="./ui/data.js"></script>
    <script type="text/javascript"></script>
        class Computer {
            constructor(name, manufacturer, cpu, ram, storage, motherboard, graphicsCard, networkAdapter) {
              this.name = name;
              this.manufacturer = manufacturer;
              this.cpu = cpu;
              this.ram = ram;
              this.storage = storage;
              this.motherboard = motherboard;
              this.graphicsCard = graphicsCard;
              this.networkAdapter = networkAdapter;
            }
          
            getName() {
              return this.name;
            }
          
            getManufacturer() {
              return this.manufacturer;
            }
          
            getCpu() {
              return this.cpu;
            }
          
            getRam() {
              return this.ram;
            }
          
            getStorage() {
              return this.storage;
            }
          
            getMotherboard() {
              return this.motherboard;
            }
          
            getGraphicsCard() {
              return this.graphicsCard;
            }
          
            getNetworkAdapter() {
              return this.networkAdapter;
            }
          
            turnOn() {
              console.log(`Booting up ${this.name}`);
              // Implement computer startup logic here
            }
          
            turnOff() {
              console.log(`Shutting down ${this.name}`);
              // Implement computer shutdown logic here
            }
          
            installSoftware(software) {
              console.log(`Installing ${software} on ${this.name}`);
              // Implement software installation logic here
            }
          
            uninstallSoftware(software) {
              console.log(`Uninstalling ${software} from ${this.name}`);
              // Implement software uninstallation logic here
            }
          }
    </script>
</html>
