---
layout: post
title: "git submodule"
date:   2019-10-24 10:47:00
categories: git
---
clone the repo locally:

    git clone git://<master_repo>/
    cd <master_repo>
    git submodule init
    git submodule update --remote

when a submodule changes:

    git add -p
    git commit -m 'comment'
    git tag -a <release> -m "<release code>"
    git submodule foreach git tag -a <release> -m "<release code>"
    git push
    git push --tags
    git submodule foreach git push --tags

get release name from git:

    git tag -n9
