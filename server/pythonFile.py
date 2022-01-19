import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)

print('ARG!', str(sys.argv))
print('ARG!A', float(sys.argv[1]))

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnOff():
  GPIO.output(float(sys.argv[1]), 1)

GPIO.setup(float(sys.argv[1]), GPIO.OUT, initial=1)
turnOnPin(float(sys.argv[1]))

t = Timer(float(sys.argv[2]), turnOff)
t.start()

# def activatePin(pin, timer):
#   GPIO.setup(pin, GPIO.OUT, initial=1)
#   turnOnPin(pin)
#   def turnOff():
#     GPIO.output(pin, 1)
#   t = Timer(timer, turnOff)
#   t.start()