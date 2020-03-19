from selenium import webdriver
from time import sleep

class WebBot(object):

    def __init__(self):
        self.driver = webdriver.Chrome()
        self.driver.get('https://hup.hu/')
        self._scrollbox = self.driver.find_element_by_xpath('/html/body/div/div')

    @property
    def scrollbox(self):
        return self._scrollbox
    
    def simple_scroll(self):
        last_scroll = 200
        for _ in range(5):
            sleep(1)
            self.driver.execute_script(f'window.scrollTo(0, {last_scroll});')
            last_scroll += 200
    
    def element_scroll(self):
        self.driver.execute_script('arguments[0].scrollIntoView()', self.scrollbox)
        self.driver.execute_script('arguments[0].scrollTo(0, 100)', self.scrollbox)



if __name__ == '__main__':
    bot = WebBot()
    bot.simple_scroll()