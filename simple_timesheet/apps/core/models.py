from django.db import models

class Entry(models.Model):
    entryId = models.AutoField(primary_key=True)
    time_from = models.DateTimeField((u"Entry Time Start"), blank=False)
    time_to = models.DateTimeField((u"Entry Time End"), blank=False)
    comment = models.CharField(max_length=500, blank=True)

    def __unicode__(self):
        return unicode(self.owner)