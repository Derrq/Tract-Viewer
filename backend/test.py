from urllib import response


try:
    from run import app
    import unittest
except Exception as e:
    print("Some modules are misssing {}".format(e))


class TractTest(unittest.TestCase):

    # Check for response 200
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get("/tracts")
        statusCode = response.status_code
        self.assertEqual(statusCode, 200)

    # Check the Content Type
    def test_index_content(self):
        tester = app.test_client(self)
        response = tester.get("/tracts")
        self.assertEqual(response.content_type, "application/json")

    # Check for Data returned
    def test_index_data(self):
        tester = app.test_client(self)
        response = tester.get("/tracts")
        self.assertTrue( b'Census' in response.data )

    # Check for Data type of params passed

    # Check for for if nothing is passed

    # Check for response 200
    def test_index(self):
        tester = app.test_client(self)
        response = tester.get("/tracts/<int:pk>")
        statusCode = response.status_code
        self.assertEqual(statusCode, 200)