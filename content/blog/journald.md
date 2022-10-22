---
layout: post
title:  "systemd journald"
date:   2022-05-16 09:30:16
---

launch:

    sudo journalctl --vacuum-size=100M

and in <pre>/etc/systemd/journald.conf</pre>:

    SystemMaxUse=250M

and then

    sudo service systemd-journald restart
