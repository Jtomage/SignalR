using Microsoft.AspNetCore.SignalR;


namespace Chatroom.WebAPI.Hubs;

public class ChatHub : Hub
{
  public async Task NewMessage(string userName, string message)
  {
    await Clients.All.SendAsync("messageReceived", userName, message);
  }
}
