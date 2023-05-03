import { useState, useEffect } from "react";
import { useUser, useSupabaseClient } from "@supabase/auth-helpers-react";
import Avatar from "./Avatar";

export default function Account({ session }) {
  const supabase = useSupabaseClient();
  const user = useUser();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [avatarUrl, setAvatarUrl] = useState("");

  useEffect(() => {
    getProfile();
  }, [session]);

  async function getProfile() {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`username, full_name, avatar_url`)
        .eq("id", user.id)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setUsername(data.username);
        setFullName(data.full_name);
        setAvatarUrl(data.avatar_url);
      }
    } catch (error) {
      alert("Error loading user data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function updateProfile({ username, full_name, avatar_url }) {
    try {
      setLoading(true);

      const updates = {
        id: user.id,
        username : username,
        full_name,
        avatar_url,
        updated_at: new Date().toISOString(),
      };

      let { error } = await supabase.from("profiles").upsert(updates);
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      alert("Error updating the data!");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="form-widget bg-white rounded-lg shadow-lg p-6">
      {fullName ? (
        <h1 className="text-2xl font-bold mb-4">Welcome {fullName}</h1>
      ) : username ? (
        <h1 className="text-2xl font-bold mb-4">Welcome {username }!!</h1>
      ) : (
        <h1 className="text-2xl font-bold mb-4">Welcome!!</h1>
      )}
  
      <Avatar
        uid={user.id}
        url={avatarUrl}
        size={150}
        onUpload={(url) => {
          setAvatarUrl(url);
          updateProfile({ username, full_name: fullName, avatar_url: url });
        }}
      />
      <div className="mb-4">
        <label htmlFor="email" className="block font-bold mb-2">
          Email
        </label>
        <input
          id="email"
          type="text"
          value={session.user.email}
          className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full"
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="block font-bold mb-2">
          Username
        </label>
        <input
          id="username"
          type="text"
          value={username || ""}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="full_name" className="block font-bold mb-2">
          Full Name
        </label>
        <input
          id="full_name"
          type="text"
          value={fullName || ""}
          onChange={(e) => setFullName(e.target.value)}
          className="bg-gray-100 border border-gray-300 rounded px-3 py-2 w-full"
        />
      </div>
  
      <div className="mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block w-full"
          onClick={() =>
            updateProfile({
              username: username,
              full_name: fullName,
              avatar_url: avatarUrl,
            })
          }
          disabled={loading}
        >
          {loading ? "Loading ..." : "Update"}
        </button>
      </div>
  
      <div>
        <button
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded block w-full"
          onClick={() => supabase.auth.signOut()}
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}