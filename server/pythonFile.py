import RPi.GPIO as GPIO
from threading import Timer
import sys

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

GPIO.setup(sys.argv[1], GPIO.OUT, initial=1)
turnOnPin(sys.argv[1])
def turnOff():
  GPIO.output(sys.argv[1], 1)
t = Timer(sys.argv[2], turnOff)
t.start()