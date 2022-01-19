import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

print('ARG!', str(sys.argv))

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnOff():
  GPIO.output(sys.argv[1], 1)

GPIO.setup(sys.argv[1], GPIO.OUT, initial=1)
turnOnPin(sys.argv[1])

t = Timer(sys.argv[2], turnOff)
t.start()

# def activatePin(pin, timer):
#   GPIO.setup(pin, GPIO.OUT, initial=1)
#   turnOnPin(pin)
#   def turnOff():
#     GPIO.output(pin, 1)
#   t = Timer(timer, turnOff)
#   t.start()