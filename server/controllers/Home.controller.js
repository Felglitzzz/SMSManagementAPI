class HomeController {
  static welcomeMessage(req, res) {
    return res.status(200).send({
      message: 'Welcome to SMS Management API',
    });
  }
}

export default HomeController;
