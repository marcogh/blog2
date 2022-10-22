---
layout: post
title: "Dynamic django form using kwargs"
date:   2018-07-10 15:09:00
categories: django
---

In `views.py`:

    from django.views.generic import FormView

    class ActivityView(FormView):

        def get_form_kwargs(self):
            kwargs = super(ActivityView, self).get_form_kwargs()
            kwargs['activity_id'] = self.kwargs.get('activity_id', None)
            return kwargs


In `forms.py`:

    class ActivityForm(ModelForm):

        def __init__(self, *args, **kwargs):

            self.activity_id = kwargs.pop('activity_id', None)
            super(ActivityForm, self).__init__(*args, **kwargs)

            self.fields['somefield'].queryset = Activity.objects.filter(id=self.activity_id)

Further info [here](https://jacobian.org/writing/dynamic-form-generation/)
