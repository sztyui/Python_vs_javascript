import pygetwindow as gw
import keyboard as kb

def closeWindow():
	focused = gw.getActiveWindow()
	title = focused.title()
	focused.close()
	print(title + " was closed")

kb.add_hotkey('alt+f2', closeWindow)
while True:
	continue



import pygetwindow as gw

gw.getAllWindows()

window = gw.getWindowsWithTitle('Name of window')
