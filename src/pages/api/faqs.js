export default function handler(req, res) {
  res.status(200).json({ 
		page_title: 'Preguntas frecuentes',
		intro: 'Si tenes alguna pregunta o sugerencia contactanos por nuestras redes o email!',
		list: [
			{
				title: 'Cuál es el horario del Check in y el Check out?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction.\n\n
									I copy, Gold Five. They came from behind.. We've analyzed their attack, sir, and there is a danger. Should I have your ship standing by? Evacuate? In out moment of triumph? I think you overestimate their chances! Rebel base, three minutes and closing. Red Group, this is Red Leader. Rendezvous at mark six point one. This is Red Two.\n\n
									I'd forgotten how much I hate space travel. It looks like an Imperial cruiser. Our passengers must be hotter than I thought. Try and hold them off. Angle the deflector shield while I make the calculations for the jump to light speed. Stay sharp! There are two more coming in, they're going to try to cut us off.`,
				active: false
			},
			{
				title: 'Tengo una reserva, puedo cambiarla y/o cancelarla?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship.\n\n
									All flight trooper, man your stations. All flight troops, man your stations. So...you got your reward and you're just leaving then? That's right, yeah! I got some old debts I've got to pay off with this stuff. Even if I didn't, you don't think I'd be fool enough to stick around here, do you? Why don't you come with us? You're pretty good in a fight. I could use you. Come on! Why don't you take a look around? You know what's about to happen, what they're up against. They could use a good pilot like you.`,
				active: false
			},
			{
				title: 'Puedo pagar el día que llego?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction.\n\n
									I copy, Gold Five. They came from behind.. We've analyzed their attack, sir, and there is a danger. Should I have your ship standing by? Evacuate? In out moment of triumph? I think you overestimate their chances! Rebel base, three minutes and closing. Red Group, this is Red Leader. Rendezvous at mark six point one. This is Red Two.\n\n
									I'd forgotten how much I hate space travel. It looks like an Imperial cruiser. Our passengers must be hotter than I thought. Try and hold them off. Angle the deflector shield while I make the calculations for the jump to light speed. Stay sharp! There are two more coming in, they're going to try to cut us off.`,
				active: false
			},
			{
				title: 'Cómo hago mi reserva?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship.\n\n
									All flight trooper, man your stations. All flight troops, man your stations. So...you got your reward and you're just leaving then? That's right, yeah! I got some old debts I've got to pay off with this stuff. Even if I didn't, you don't think I'd be fool enough to stick around here, do you? Why don't you come with us? You're pretty good in a fight. I could use you. Come on! Why don't you take a look around? You know what's about to happen, what they're up against. They could use a good pilot like you.`,
				active: false
			},
			{
				title: 'Puedo llevar a mi mascota?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction.\n\n
									I copy, Gold Five. They came from behind.. We've analyzed their attack, sir, and there is a danger. Should I have your ship standing by? Evacuate? In out moment of triumph? I think you overestimate their chances! Rebel base, three minutes and closing. Red Group, this is Red Leader. Rendezvous at mark six point one. This is Red Two.\n\n
									I'd forgotten how much I hate space travel. It looks like an Imperial cruiser. Our passengers must be hotter than I thought. Try and hold them off. Angle the deflector shield while I make the calculations for the jump to light speed. Stay sharp! There are two more coming in, they're going to try to cut us off.`,
				active: false
			},
			{
				title: 'Puedo llevar a mi mascota?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship.\n\n
									All flight trooper, man your stations. All flight troops, man your stations. So...you got your reward and you're just leaving then? That's right, yeah! I got some old debts I've got to pay off with this stuff. Even if I didn't, you don't think I'd be fool enough to stick around here, do you? Why don't you come with us? You're pretty good in a fight. I could use you. Come on! Why don't you take a look around? You know what's about to happen, what they're up against. They could use a good pilot like you.`,
				active: false
			},
			{
				title: 'Debo reservar y/o pagar el estacionamiento?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction.\n\n
									I copy, Gold Five. They came from behind.. We've analyzed their attack, sir, and there is a danger. Should I have your ship standing by? Evacuate? In out moment of triumph? I think you overestimate their chances! Rebel base, three minutes and closing. Red Group, this is Red Leader. Rendezvous at mark six point one. This is Red Two.\n\n
									I'd forgotten how much I hate space travel. It looks like an Imperial cruiser. Our passengers must be hotter than I thought. Try and hold them off. Angle the deflector shield while I make the calculations for the jump to light speed. Stay sharp! There are two more coming in, they're going to try to cut us off.`,
				active: false
			},
			{
				title: 'Se cobra adicional por llegar mas tarde ?',
				content: `Did you hear that? They've shut down the main reactor. We'll be destroyed for sure. This is madness! We're doomed! There'll be no escape for the Princess this time. What's that? Artoo! Artoo-Detoo, where are you? At last! Where have you been? They're heading in this direction. What are we going to do? We'll be sent to the spice mine of Kessel or smashed into who knows what! Wait a minute, where are you going? The Death Star plans are not in the main computer. Where are those transmissions you intercepted? What have you done with those plans? We intercepted no transmissions. Aaah....This is a consular ship.\n\n
									All flight trooper, man your stations. All flight troops, man your stations. So...you got your reward and you're just leaving then? That's right, yeah! I got some old debts I've got to pay off with this stuff. Even if I didn't, you don't think I'd be fool enough to stick around here, do you? Why don't you come with us? You're pretty good in a fight. I could use you. Come on! Why don't you take a look around? You know what's about to happen, what they're up against. They could use a good pilot like you.`,
				active: false
			}
		]
	})
}