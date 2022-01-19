import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnOff():
  GPIO.output(sys.argv[0], 1)

GPIO.setup(sys.argv[0], GPIO.OUT, initial=1)
turnOnPin(sys.argv[0])

t = Timer(sys.argv[1], turnOff)
t.start()

def activatePin(pin, timer):
  GPIO.setup(pin, GPIO.OUT, initial=1)
  turnOnPin(pin)
  def turnOff():
    GPIO.output(pin, 1)
  t = Timer(timer, turnOff)
  t.start()