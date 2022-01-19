import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnOff():
  GPIO.output(19, 1)

GPIO.setup(19, GPIO.OUT, initial=1)
turnOnPin(19)

t = Timer(1.5, turnOff)
t.start()