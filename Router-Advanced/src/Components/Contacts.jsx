import React from 'react'

const Contacts = () => {
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Contacts</h2>
    <ul className="space-y-3">
        {[
            { id: 1, name: 'Kundan Mathur', email: 'KundanMathur@hotmail.com', phone: '+91 9876543210' },
            { id: 2, name: 'Akash Kumar', email: 'akashkumar@hotmail.com', phone: '+91 9876543210' },
            { id: 3, name: 'Phulkeshwar Mahto', email: 'phulkeshwar@hotmail.com', phone: '+91 9876543210' },
            { id: 4, name: 'Sushant Kumar', email: 'sushantkumar@hotmail.com', phone: '+91 9876543210' }
        ].map(contact => (
            <li key={contact.id} className="p-3 border rounded flex items-center justify-between">
                <div>
                    <div className="font-medium">{contact.name}</div>
                    <div className="text-sm text-gray-600">{contact.email} • {contact.phone}</div>
                </div>
                <div className="space-x-3">
                    <a href={`mailto:${contact.email}`} className="text-blue-600">Email</a>
                    <a href={`tel:${contact.phone.replace(/\D/g, '')}`} className="text-green-600">Call</a> {/* (/\D/g, '') means remove all non-digit characters*/}
                </div>
            </li>
        ))}
    </ul>
    {/* Feedback form */}
    <form action="">
        
        <div className="space-y-4">
            <h2 className="text-2xl font-bold mt-10">FeedBack</h2>
            <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input name="name" type="text" required className="w-full px-3 py-2 border rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input name="email" type="email" required className="w-full px-3 py-2 border rounded" />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea name="message" rows="4" required className="w-full px-3 py-2 border rounded"></textarea>
            </div>
            <div>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        const form = e.target.form;
                        const data = new FormData(form);
                        const payload = {
                            name: data.get('name'),
                            email: data.get('email'),
                            message: data.get('message'),
                        };
                        console.log('Feedback submitted:', payload);
                        alert('Thanks for your feedback!');
                        form.reset();
                    }}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Send Feedback
                </button>
            </div>
        </div>
    </form>
    </div>
  )
}

export default Contacts
