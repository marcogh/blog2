---
layout: post
title:  "systemd journald"
date:   2022-05-16 09:30:16
---

systemd-journald could potentially eat a lot of system resources. On a normal
desktop machine, this could be reduced with the following commands:
```bash
    sudo journalctl --vacuum-size=100M
```
and in '''/etc/systemd/journald.conf''':
```
    SystemMaxUse=250M
```
and then restart the service:
```
    sudo service systemd-journald restart
```
