---
title: Apps to Dockge
---

Many users eventually want to move away from TrueNAS Apps to Dockge.
But manually finding and copying the docker-compose file is an annoying job.

Even worse is that there is a lot of truenas specific crap inside of there, one doesn't need nor want.


Luckly we've writhen a script for you, check it out here:
https://github.com/trueforge-org/containerforge/blob/main/scripts/apps2dockge.sh


Using it is rather simple:
- Download to a directory of your choice on TrueNAS
- make executable (`chmod +x apps2dockge.sh`)
- edit it, so the top 2 variables point to your apps pool (replace `tank`) and the TARGET points to the folder/dataset your want all dockge folder/compose.yaml combination generated into.
- Ensure you're running as root (`sudo su`)
- Run it using `./apps2dockge.sh`