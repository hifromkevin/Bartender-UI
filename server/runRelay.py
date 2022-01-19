import RPi.GPIO as GPIO
import sys
from threading import Timer

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

pin = int(sys.argv[1])
timer = float(sys.argv[2])

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('Turning On Pin ' + str(pin))

def turnOff():
  GPIO.output(pin, 1)
  print('Turning Off Pin ' + str(pin))


GPIO.setup(pin, GPIO.OUT, initial=1)
turnOnPin(pin)

t = Timer(timer, turnOff)
t.start()