---
layout: post
title: "postgresql jsonb"
date:   2019-11-15 15:35:00
categories: postgresql
---

Crate table:

    create table score (
        id serial not null primary key,
        info jsonb not null
    ); 

Update or Insert key:

    update score set info = info || '{"query": "last:4"}' 
    where info->'name' = '"Marto"'::jsonb;

Delete key: 

    update score set info = info -'query'
    where info->'name' = '"Marto"'::jsonb;

