import RPi.GPIO as GPIO
from threading import Timer
import sys
GPIO.setwarnings(False)

GPIO.setmode(GPIO.BCM)

def turnOnPin(pin):
  GPIO.output(pin, 0)
  print('PIN ON: ' + str(pin))

def turnOff(pin):
  GPIO.setmode(GPIO.BCM)
  GPIO.output(pin, 1)

# GPIO.setup(19, GPIO.OUT, initial=1)
# turnOnPin(19)

# t = Timer(1.5, turnOff)
# t.start()

valz = [[19,1.5],[26,3]]

print('SYS! ' + str(sys.argv))

for i in valz:
  GPIO.setup(i[0], GPIO.OUT, initial=1)
  turnOnPin(i[0])

  t = Timer(i[1], turnOff(i[0]))
  t.start()
