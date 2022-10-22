---
layout: post
title: "Git branch cherry-pick"
date:   2018-05-09 15:02:00 +0100
categories: git shell
---

### Git gymnastic

Prende i commit da `thisbranch` che non sono in `thatbranch` e ne fa il cherry-pick nel 
branch corrente:

    git log --pretty='%h' thisbranch ^thatbranch | tac | xargs git cherry-pick 
