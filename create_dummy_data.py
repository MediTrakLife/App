"""

This is the dummy vital stats generating module.


Sensor Parameters are as follows:

1. Respiration Rate [breaths/ min]
2. Heart Rate [beats/ min]
3. Temperature [degrees Fahrenheit]
4. Blood Pressure [systolic pressure mmHg/ diastolic pressure mmHg]
5. Spo2 [blood oxygenation]

"""

# from __future__ import <>

__all__ = ['', '', '']
__version__ = '0.0'
__author__ = 'Pallavi Mishra'

import os
import sys
import json 

# Sample dummy readings for display only

# {key:value mapping} 
s1 ={"RR":20, 
   	"HRM":31, 
   	"Temp":98,
   	"BP":100/80,
   	"SPO2":95
   	} 
  
# conversion to JSON done by dumps() function 
d1 = json.dumps(s1) 
 
# printing the output 
print(d1) 


