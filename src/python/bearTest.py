import unittest

from bear import Bear

class BearTester(unittest.TestCase):

    def setUp(self):
        self.bear = Bear()

    def test_if_bear_construct(self):
        self.bear = Bear()
    
    def test_if_bear_is_loud(self):
        self.assertIn('Brumm', self.bear.loud())

    def test_if_bear_is_list(self):
        self.assertIsInstance(self.bear.malna(), list)

    def test_if_bear_bolond_kar_hanyas(self):
        self.assertEqual(self.bear.hanyas_apa_keze(), 60.0)