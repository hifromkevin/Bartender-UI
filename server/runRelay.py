import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

pin = int(sys.argv[1])
timer = float(sys.argv[2])

print('himom!', pin, timer)

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('Turning Off Pin ' + str(pin))

def turnOff():
  GPIO.output(pin, 1)

GPIO.setup(pin, GPIO.OUT, initial=1)
turnOnPin(pin)

t = Timer(timer, turnOff)
t.start()