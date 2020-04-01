"""

This is the dummy vital stats generating module.


Sensor Parameters are as follows:

1. Respiration Rate [breaths/ min, avg_range: 12-16/min] 
2. Heart Rate [beats/ min, avg_range: 75-160/min]
3. Temperature [degrees Fahrenheit, avg_range: 97.7-99.5 F]
4. Blood Pressure [systolic pressure mmHg/ diastolic pressure mmHg, avg_range: 70-190/40-100 mmHg]
5. Spo2 [blood oxygenation, avg_range: 95-100%]

"""

# from __future__ import <>

__all__ = ['', '', '']
__version__ = '0.0'
__author__ = 'Pallavi Mishra'

import os
import sys
import json 
from datetime import datetime
from datetime import timedelta
import random


def create_per_minute_dummy_readings(num_minutes):
	data = []
	init_timestamp = datetime.now() 

	for i in range(num_minutes):

		ts = init_timestamp + timedelta(seconds=60*i)  
		rr_measure = random.uniform(12,16)
		hrm_measure = random.uniform(75,160)
		temp_measure = random.uniform(97.7,99.5)
		bp_measure_sys = random.uniform(70,190)
		bp_measure_dia = random.uniform(40,100)
		spo_measure = random.uniform(95,100)


		# create {key:value mapping} 
		sample = {
		"Timestamp":ts.isoformat(),
		"RR":rr_measure, 
	   	"HRM":hrm_measure, 
	   	"Temp":temp_measure,
	   	"BP_Sys":bp_measure_sys,
	   	"BP_Dia":bp_measure_dia,
	   	"SPO2":spo_measure }

	   	data.append(sample)

   	return data


mydata = create_per_minute_dummy_readings(100000)

with open('DummyData_00.json', 'w') as outfile: 
	json.dump(mydata, outfile) 
	





