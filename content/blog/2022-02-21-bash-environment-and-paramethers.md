---
layout: post
title:  "bash args and environ"
date:   2021-10-29 18:28:49
---

'''python
    #!/usr/bin/env python3
    import argparse
    import os
    
    parser = argparse.ArgumentParser()
    parser.add_argument("echo")
    args = parser.parse_args()
    
    print("argument: {}".format(args.echo))
    print("environment: {}".format(os.environ.get('VAR1')))
'''
